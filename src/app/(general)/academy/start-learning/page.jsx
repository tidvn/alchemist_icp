"use client";
import React, { useCallback, useState } from "react";
import Atropos from "atropos/react";
import { Button, Label, Radio } from "flowbite-react";
import { Parallax } from "react-scroll-parallax";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

// import { getSiteUrl } from "../../../libs/links.js";

function StartLearning() {
  // const navigate = useNavigate();
  const router = useRouter();
  const [experience, setExperience] = useState("intermediate");

  const onSubmit = useCallback(
    () => router.push(`/academy/start-learning/${experience}`),
    [experience]
  );

  return (
    <>
      <section
        className="section relative z-10 py-10 overflow-hidden"
        id="section-main"
      >
        <div className="select-none absolute z-0 top-0 left-0">
          <Parallax speed={10}>
            <img
              src="/img/banners/main-start-learning-bgleft.png"
              width="2228"
              height="1221"
              loading="lazy"
              alt=""
              style={{ width: 742 }}
            />
          </Parallax>
        </div>

        <div className="select-none absolute z-0 top-0 right-0 hidden lg:block">
          <Parallax speed={-10}>
            <img
              src="/img/banners/main-start-learning-bgright.png"
              width="1959"
              height="1431"
              loading="lazy"
              alt=""
              style={{ width: 653 }}
            />
          </Parallax>
        </div>

        <div className="relative z-0 mb-4 lg:mb-0 hidden lg:block">
          <div className="container">
            <div className="lg:flex lg:flex-row-reverse">
              <div className="flex-shrink-0 lg:pr-12">
                <Atropos shadow={false} highlight={false} rotateTouch={false}>
                  <img
                    src="/img/banners/main-start-learning-1.png"
                    width="930"
                    height="1000"
                    loading="lazy"
                    alt=""
                    style={{ width: 465 }}
                  />
                </Atropos>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute inset-0 z-15 lg:flex justify-start items-center">
          <div className="container">
            <div className="lg:max-w-[40rem] relative bg-blueLight2 rounded-2xl px-10 py-6">
              <header className="mb-4">
                <h1 className="text-2xl font-bold text-gradient-1 leading-1.5 mb-3">
                  Questionnaire
                </h1>

                <p className="text-base font-medium text-secondary">
                  Question 1/2
                </p>
              </header>

              <form className="text-neutral2">
                <fieldset className="flex flex-col gap-4">
                  <legend className="text-xl lg:text-2xl font-semibold leading-1.5 mb-6 lg:mb-8">
                    What is your level of trading experience?
                  </legend>

                  <div className="flex items-center gap-2">
                    <Radio
                      className="h-4 w-4 border-2 border-neutral2 focus:!ring-2 focus:!ring-blue-500 text-blue-700"
                      id="experience_newbie"
                      name="experience"
                      value="newbie"
                      defaultChecked={experience === "newbie"}
                      onChange={() => setExperience("newbie")}
                    />
                    <Label htmlFor="experience_newbie">Newbie</Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <Radio
                      className="h-4 w-4 border-2 border-neutral2 focus:!ring-2 focus:!ring-blue-500 text-blue-700"
                      id="experience_intermediate"
                      name="experience"
                      value="intermediate"
                      defaultChecked={experience === "intermediate"}
                      onChange={() => setExperience("intermediate")}
                    />
                    <Label htmlFor="experience_intermediate">
                      Intermediate
                    </Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <Radio
                      className="h-4 w-4 border-2 border-neutral2 focus:!ring-2 focus:!ring-blue-500 text-blue-700"
                      id="experience_professional"
                      name="experience"
                      value="professional"
                      defaultChecked={experience === "professional"}
                      onChange={() => setExperience("professional")}
                    />
                    <Label htmlFor="experience_professional">
                      Professional
                    </Label>
                  </div>
                </fieldset>

                <div className="mt-12">
                  <Button pill className="group" onClick={onSubmit}>
                    {/* <Button pill className="group"> */}
                    <div className="flex items-center">
                      <div>Next</div>
                      <svg
                        className="ml-2 transition group-hover:translate-x-1"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.28 10L22.28 15V16.4L17.28 21.4L15.86 20L19.14 16.7H8V14.7H19.14L15.84 11.4L17.28 10Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StartLearning;
