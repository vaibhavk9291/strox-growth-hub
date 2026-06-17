'use client';

import { useScroll, useTransform, motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ZoomImage {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: ZoomImage[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const shouldReduceMotion = useReducedMotion();

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	if (shouldReduceMotion) {
		return (
			<section className="relative flex h-screen w-full items-center justify-center overflow-hidden border-t border-border bg-bg">
				<div className="relative aspect-video w-full max-w-4xl px-4 md:px-8">
					<Image 
						src={images[0]?.src || '/placeholder.svg'} 
						fill 
						alt={images[0]?.alt || "Zoom Parallax Static"} 
						className="rounded-xl object-cover duotone-filter" 
					/>
				</div>
			</section>
		);
	}

	return (
		<section ref={container} className="relative h-[200vh] border-t border-border bg-bg">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
						>
							<div className="relative h-[25vh] w-[25vw]">
								<Image
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									fill
									className="h-full w-full rounded-xl object-cover duotone-filter"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
