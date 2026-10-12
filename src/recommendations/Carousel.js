'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
// replace icons with your own if needed

import './Carousel.css';

const DEFAULT_ITEMS = [
    {
        id: 1,
        title: 'Luciana Barbosa',
        description: 'Product Owner',
        text: "It was great working with Samuel! Beyond being an excellent professional with an incredible knack for solving complex problems, he is a fantastic team player—always willing to help and share knowledge. It was a pleasure sharing projects and challenges with you. I’m rooting for your success and recommend you without hesitation!",

    },
    {
        title: 'Renata Japur',
        description: 'Product Owner',
        text: "I had the opportunity to work with Samuel on multiple projects and observe his performance as a key technical leader within the team. On a particularly complex project—where I served as Product Manager and he as Tech Lead—he stood out for his ability to quickly grasp the application's context, lead strategic refactoring efforts, and drive architectural decisions. He also played a pivotal role in team development by mentoring developers, sharing knowledge, and contributing to technical decision-making. He is a collaborative, committed professional with outstanding technical expertise. I am confident that he will bring this same level of dedication and quality to any future teams he joins.",

        id: 2,
    },
    {
        title: 'Patrick Killian',
        description: 'Software Engineer',
        text: "Samuel was my tech lead on one of the most prominent projects of my career, where we worked directly with Petrobras; there were countless moments of learning and guidance—far too many to list here. The impact he had on the project is evident, as he consistently led our team in a way that fostered both individual personal growth and the success of the project itself. It is an honor to recommend this professional!",

        id: 3,
    },
    {
        title: 'Jefferson Rodrigues',
        description: 'Tech Lead and Software Engineer',
        text: "I have had the opportunity to closely observe Samuel’s work and his growth as a developer. He stands out for his proactivity, autonomy, and ability to take ownership of tasks, carrying out his work with commitment and consistently seeking solutions.\n" +
            "\n" +
            "Beyond his technical competence, he demonstrates an aptitude for understanding project challenges, collaborating with various team members, and effectively contributing to problem-solving. His proactive attitude and sense of responsibility have a direct, positive impact on the quality and reliability of his deliverables.\n" +
            "\n" +
            "Samuel is a competent, committed, and collaborative professional who adds significant value to the team and is always ready to take on new challenges.",

        id: 4,
    },
    {
        title: 'Daniel Terra',
        description: 'Software Engineer',
        text: "I worked with Samuel at Synergia and highly recommend his work. As a full-stack developer, he has mastered the end-to-end Software Development Life Cycle and was responsible for delivering high-impact features and improvements to our project.\n" +
            "\n" +
            "Beyond his technical skills, he became a key figure for the team: he supported sprint planning, conducted code reviews, handled deployments, and mentored developers with great clarity and patience. Always approachable, he elevated the performance of those around him and was always ready to help without hesitation.\n" +
            "\n" +
            "He is a well-rounded professional and a great person to have on the team. He would be a top-tier developer in any organization. I recommend him without reservation!",

        id: 5,
    }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
    const outputRange = [90, 0, -90];
    const rotateY = useTransform(x, range, outputRange, { clamp: false });

    return (
        <motion.div
            key={`${item?.id ?? index}-${index}`}
            className={`carousel-item ${round ? 'round' : ''}`}
            style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && {borderRadius: '50%'})
            }}
            transition={transition}
        >
            {/*<div className={`carousel-item-header ${round ? 'round' : ''}`}>*/}
            {/*    <span className="carousel-icon-container">{item.icon}</span>*/}
            {/*</div>*/}
            {/*<div className="carousel-item-content">*/}
            {/*    <div className="carousel-item-title">{item.title}</div>*/}
            {/*    <p className="carousel-item-description">{item.description}</p>*/}
            {/*</div>*/}


            <div>
                <p className="carousel-item-description textPrimary">
                    {item.text}
                </p>
            </div>
            <div className="recommendation-author">
                <div className="author-info">
                    <h3 className="carousel-item-title textPrimary">{item.title}</h3>
                    <p className="carousel-item-description textPrimary">{item.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Carousel({
                                     items = DEFAULT_ITEMS,
                                     baseWidth = 560,
                                     autoplay = true,
                                     autoplayDelay = 5000,
                                     pauseOnHover = true,
                                     loop = true,
                                     round = false
                                 }) {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;
    const itemsForRender = useMemo(() => {
        if (!loop) return items;
        if (items.length === 0) return [];
        return [items[items.length - 1], ...items, items[0]];
    }, [items, loop]);

    const [position, setPosition] = useState(loop ? 1 : 0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (!autoplay || itemsForRender.length <= 1) return undefined;
        if (pauseOnHover && isHovered) return undefined;

        const timer = setInterval(() => {
            setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
        }, autoplayDelay);

        return () => clearInterval(timer);
    }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

    useEffect(() => {
        const startingPosition = loop ? 1 : 0;
        setPosition(startingPosition);
        x.set(-startingPosition * trackItemOffset);
    }, [items.length, loop, trackItemOffset, x]);

    useEffect(() => {
        if (!loop && position > itemsForRender.length - 1) {
            setPosition(Math.max(0, itemsForRender.length - 1));
        }
    }, [itemsForRender.length, loop, position]);

    const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationStart = () => {
        setIsAnimating(true);
    };

    const handleAnimationComplete = () => {
        if (!loop || itemsForRender.length <= 1) {
            setIsAnimating(false);
            return;
        }
        const lastCloneIndex = itemsForRender.length - 1;

        if (position === lastCloneIndex) {
            setIsJumping(true);
            const target = 1;
            setPosition(target);
            x.set(-target * trackItemOffset);
            requestAnimationFrame(() => {
                setIsJumping(false);
                setIsAnimating(false);
            });
            return;
        }

        if (position === 0) {
            setIsJumping(true);
            const target = items.length;
            setPosition(target);
            x.set(-target * trackItemOffset);
            requestAnimationFrame(() => {
                setIsJumping(false);
                setIsAnimating(false);
            });
            return;
        }

        setIsAnimating(false);
    };

    const handleDragEnd = (_, info) => {
        const { offset, velocity } = info;
        const direction =
            offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
                ? 1
                : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
                    ? -1
                    : 0;

        if (direction === 0) return;

        setPosition(prev => {
            const next = prev + direction;
            const max = itemsForRender.length - 1;
            return Math.max(0, Math.min(next, max));
        });
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
                right: 0
            }
        };

    const activeIndex =
        items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

    return (
        <div
            ref={containerRef}
            className={`carousel-container ${round ? 'round' : ''}`}
            style={{
                width: `${baseWidth}px`,
                ...(round && { height: `${baseWidth}px`, borderRadius: '12px' })
            }}
        >
            <div className="quote-mark">“</div>
            <motion.div
                className="carousel-track"
                drag={isAnimating ? false : 'x'}
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
                    x
                }}
                onDragEnd={handleDragEnd}
                animate={{x: -(position * trackItemOffset)}}
                transition={effectiveTransition}
                onAnimationStart={handleAnimationStart}
                onAnimationComplete={handleAnimationComplete}
            >
                {itemsForRender.map((item, index) => (
                    <CarouselItem
                        key={`${item?.id ?? index}-${index}`}
                        item={item}
                        index={index}
                        itemWidth={itemWidth}
                        round={round}
                        trackItemOffset={trackItemOffset}
                        x={x}
                        transition={effectiveTransition}
                    />
                ))}
            </motion.div>
            <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
                <div className="carousel-indicators">
                    {items.map((_, index) => (
                        <motion.button
                            type="button"
                            key={index}
                            className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={activeIndex === index}
                            animate={{
                                scale: activeIndex === index ? 1.2 : 1
                            }}
                            onClick={() => setPosition(loop ? index + 1 : index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
