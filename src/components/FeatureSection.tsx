import React from 'react';
interface FeatureSectionProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}
export function FeatureSection({
  tag,
  title,
  description,
  image,
  imagePosition
}: FeatureSectionProps) {
  return <section className="w-full bg-[#0c1112] py-16 md:py-24">
      <div className="container px-6 md:px-12">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
          <div className="w-full md:w-1/2">
            <img src={image} alt={title} className="w-full h-[300px] md:h-[400px] object-cover rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 py-6">
            <div className="flex items-center mb-4">
              <div className="h-px w-8 bg-[#d5b062] mr-3"></div>
              <span className="text-xs tracking-wider text-[#d5b062]">
                {tag}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">{title}</h2>
            <p className="text-white/70 leading-relaxed mb-6">{description}</p>
            <button className="text-[#d5b062] text-sm font-medium flex items-center">
              Read More
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>;
}