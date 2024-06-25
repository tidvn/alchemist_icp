import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

import TopicSelection from "../Elements/TopicSelection";
import LevelSelection from "../Elements/LevelSelection";
import ReadingTimeRange from "../Elements/ReadingTimeRange";

import listTopics from "../../mocks/list-topics.json";

export default function TopicFilters() {
  return (
    <section className="section">
      <Accordion.Root type="single" collapsible defaultValue="main">
        <Accordion.Item value="main">
          <Accordion.Content className="AccordionContent">
            <div className="pt-10 lg:pt-20 pb-10 lg:pb-14">
              <div className="container">
                <header className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold leading-1.5">
                    Topics on SeerBOT
                  </h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap8 lg:gap-8 xl:gap-20">
                  <div className="mb-8 lg:mb-0">
                    <strong className="block text-xl mb-4 font-medium">
                      Topics
                    </strong>

                    <TopicSelection topics={listTopics} />
                  </div>

                  <div>
                    <div className="mb-8 lg:mb-12">
                      <strong className="block text-xl mb-4 font-medium">
                        Level
                      </strong>
                      <LevelSelection />
                    </div>

                    <strong className="block text-xl mb-4 font-medium">
                      Reading time
                    </strong>
                    <ReadingTimeRange />
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>

          <div className="bg-[#F6F6F6] py-4">
            <div className="container">
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 items-center justify-between gap-4 text-sm md:text-base">
                <div className="flex items-center gap-8">
                  <strong className="hidden md:block text-md font-medium">
                    Layout
                  </strong>

                  <div className="inline-flex items-center gap-2">
                    <button className="button rounded border-none p-1 hover:bg-gray-50 focus:bg-gray-50 focus:ring-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33333 0H0.666667C0.298667 0 0 0.298667 0 0.666667V3.33333C0 3.70133 0.298667 4 0.666667 4H3.33333C3.70133 4 4 3.70133 4 3.33333V0.666667C4 0.298667 3.70133 0 3.33333 0Z"
                          fill="currentColor"
                        />
                        <path
                          d="M3.33333 6H0.666667C0.298667 6 0 6.29867 0 6.66667V9.33333C0 9.70133 0.298667 10 0.666667 10H3.33333C3.70133 10 4 9.70133 4 9.33333V6.66667C4 6.29867 3.70133 6 3.33333 6Z"
                          fill="currentColor"
                        />
                        <path
                          d="M3.33333 12H0.666667C0.298667 12 0 12.2987 0 12.6667V15.3333C0 15.7013 0.298667 16 0.666667 16H3.33333C3.70133 16 4 15.7013 4 15.3333V12.6667C4 12.2987 3.70133 12 3.33333 12Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.33333 0H6.66667C6.29867 0 6 0.298667 6 0.666667V3.33333C6 3.70133 6.29867 4 6.66667 4H9.33333C9.70133 4 10 3.70133 10 3.33333V0.666667C10 0.298667 9.70133 0 9.33333 0Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.33333 6H6.66667C6.29867 6 6 6.29867 6 6.66667V9.33333C6 9.70133 6.29867 10 6.66667 10H9.33333C9.70133 10 10 9.70133 10 9.33333V6.66667C10 6.29867 9.70133 6 9.33333 6Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.33333 12H6.66667C6.29867 12 6 12.2987 6 12.6667V15.3333C6 15.7013 6.29867 16 6.66667 16H9.33333C9.70133 16 10 15.7013 10 15.3333V12.6667C10 12.2987 9.70133 12 9.33333 12Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.3333 0H12.6667C12.2987 0 12 0.298667 12 0.666667V3.33333C12 3.70133 12.2987 4 12.6667 4H15.3333C15.7013 4 16 3.70133 16 3.33333V0.666667C16 0.298667 15.7013 0 15.3333 0Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.3333 6H12.6667C12.2987 6 12 6.29867 12 6.66667V9.33333C12 9.70133 12.2987 10 12.6667 10H15.3333C15.7013 10 16 9.70133 16 9.33333V6.66667C16 6.29867 15.7013 6 15.3333 6Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.3333 12H12.6667C12.2987 12 12 12.2987 12 12.6667V15.3333C12 15.7013 12.2987 16 12.6667 16H15.3333C15.7013 16 16 15.7013 16 15.3333V12.6667C16 12.2987 15.7013 12 15.3333 12Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <button className="button rounded border-none p-1 hover:bg-gray-50 focus:bg-gray-50 focus:ring-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5275 2.00781H5.48901C4.67713 2.00781 4.0166 2.66834 4.0166 3.48122C4.0166 4.29309 4.67713 4.95363 5.48901 4.95363H14.5275C15.3394 4.95363 15.9999 4.29309 15.9999 3.48122C15.9999 2.66831 15.3394 2.00781 14.5275 2.00781Z"
                          fill="currentColor"
                        />
                        <path
                          d="M1.47294 2.00781C0.660781 2.00781 0 2.66856 0 3.48072C0 4.29288 0.660781 4.95363 1.47294 4.95363C2.28509 4.95363 2.94584 4.29288 2.94584 3.48072C2.94584 2.66856 2.28509 2.00781 1.47294 2.00781Z"
                          fill="currentColor"
                        />
                        <path
                          d="M1.47294 6.52734C0.660781 6.52734 0 7.18809 0 8.00025C0 8.81241 0.660781 9.47316 1.47294 9.47316C2.28509 9.47316 2.94584 8.81241 2.94584 8.00025C2.94584 7.18809 2.28509 6.52734 1.47294 6.52734Z"
                          fill="currentColor"
                        />
                        <path
                          d="M1.47294 11.0449C0.660781 11.0449 0 11.7057 0 12.5178C0 13.33 0.660781 13.9907 1.47294 13.9907C2.28509 13.9907 2.94584 13.33 2.94584 12.5178C2.94584 11.7057 2.28509 11.0449 1.47294 11.0449Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.5275 6.52734H5.48901C4.67713 6.52734 4.0166 7.18787 4.0166 8.00075C4.0166 8.81262 4.67713 9.47316 5.48901 9.47316H14.5275C15.3394 9.47316 15.9999 8.81262 15.9999 8.00075C15.9999 7.18784 15.3394 6.52734 14.5275 6.52734Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.5275 11.0449H5.48901C4.67713 11.0449 4.0166 11.7055 4.0166 12.5183C4.0166 13.3302 4.67713 13.9907 5.48901 13.9907H14.5275C15.3394 13.9907 15.9999 13.3302 15.9999 12.5183C15.9999 11.7055 15.3394 11.0449 14.5275 11.0449Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>

                  <a href="#">Apply filters</a>

                  <a href="#">Clear filters</a>
                </div>

                <div className="w-full md:w-auto text-center md:text-left pt-2 md:pt-0">
                  <Accordion.Trigger className="AccordionTrigger inline-flex gap-3 items-center">
                    <svg
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1729 5.83607C10.9782 6.03477 10.6733 6.05284 10.4585 5.89026L10.397 5.83607L6.00033 1.35106L1.60368 5.83607C1.40888 6.03477 1.10405 6.05284 0.889242 5.89026L0.827702 5.83607C0.632902 5.63736 0.615193 5.32642 0.774575 5.10731L0.827702 5.04453L5.61234 0.163933C5.80714 -0.0347736 6.11197 -0.0528378 6.32677 0.10974L6.38831 0.163933L11.1729 5.04453C11.3872 5.26311 11.3872 5.61749 11.1729 5.83607Z"
                        fill="#333333"
                      />
                    </svg>
                    Toggle filters
                  </Accordion.Trigger>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
}
