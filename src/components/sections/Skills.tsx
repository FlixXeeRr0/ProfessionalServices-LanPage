import { useState, useRef, useEffect } from 'react';
import MarqueePkg from 'react-fast-marquee';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillGroups, skillsHeader } from '@/data/profile';
import type { SkillItem } from '@/types/profile';

const Marquee = (MarqueePkg as any).default || MarqueePkg;

function SkillChip({ item }: Readonly<{ item: string | SkillItem }>) {
  const isObj = typeof item === 'object';
  const name = isObj ? item.name : item;
  const icon = isObj ? item.icon : undefined;

  let IconComponent = null;
  if (icon) {
    if (typeof icon === 'string') {
      IconComponent = <img src={icon} alt={name} className="w-15 h-15" />;
    } else {
      const Icon = icon;
      IconComponent = <Icon className="w-15 h-15" />;
    }
  }

  return (
    <div className="mx-4 flex flex-col items-center gap-2 text-gray-700 font-medium">
      {IconComponent}
      <span>{name}</span>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillGroups[0].category);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const activeButton = buttonRefs.current[activeCategory];
    const container = containerRef.current;

    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIndicatorStyle({
        left: buttonRect.left - containerRect.left,
        top: buttonRect.top - containerRect.top,
        width: buttonRect.width,
        height: buttonRect.height,
      });
    }
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => {
      const activeButton = buttonRefs.current[activeCategory];
      const container = containerRef.current;

      if (activeButton && container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();

        setIndicatorStyle({
          left: buttonRect.left - containerRect.left,
          top: buttonRect.top - containerRect.top,
          width: buttonRect.width,
          height: buttonRect.height,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeCategory]);

  return (
    <section id="habilidades" className="light bg-gray-100 w-full">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-semibold text-md text-blue">TECNOLOGÍAS</span>

        <SectionHeading
          title={skillsHeader.title}
          subtitle={skillsHeader.subtitle}
        />

        <div className="flex flex-col items-center gap-8 overflow-hidden">
          {/* Contenedor de botones con flex-wrap para móviles */}
          <div className="w-full flex justify-center">
            <div
              ref={containerRef}
              className="relative flex flex-wrap justify-center gap-2 rounded-2xl md:rounded-full border border-gray-200 bg-white p-1.5 shadow-sm w-full md:w-auto"
            >
              <div
                className="absolute rounded-full bg-text shadow-md transition-all duration-300 ease-out"
                style={{
                  left: `${indicatorStyle.left}px`,
                  top: `${indicatorStyle.top}px`,
                  width: `${indicatorStyle.width}px`,
                  height: `${indicatorStyle.height}px`,
                }}
              />

              {skillGroups.map((group) => (
                <button
                  key={group.category}
                  ref={(el) => {
                    buttonRefs.current[group.category] = el;
                  }}
                  onClick={() => setActiveCategory(group.category)}
                  className={`relative z-10 rounded-full px-4 md:px-6 py-2 text-xs md:text-sm font-medium transition-colors duration-300 whitespace-nowrap grow md:grow-0 ${
                    activeCategory === group.category
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full mt-8 grid">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in-out overflow-hidden ${
                  activeCategory === group.category
                    ? 'opacity-100 z-10'
                    : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <Marquee
                  play={activeCategory === group.category}
                  pauseOnHover={false}
                  direction="left"
                  speed={40}
                  gradient={true}
                  gradientColor="#F3F4F6"
                  gradientWidth={40}
                >
                  {group.items.map((item, index) => (
                    <SkillChip
                      key={
                        typeof item === 'object'
                          ? `${item.name}_${index}`
                          : item
                      }
                      item={item}
                    />
                  ))}
                </Marquee>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
