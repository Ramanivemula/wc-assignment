import { Frame } from "../../components/Frame/frame";
import QUESTIONS from "../../data/questions";
import type { Question } from "../../data/questions";
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const Element = (): React.JSX.Element => {
  const questions: Question[] = QUESTIONS;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [displayedScore, setDisplayedScore] = useState(0);
  const [showPaw, setShowPaw] = useState(true);

  useEffect(() => {
    // show paw for first question for 5s whenever index becomes 0
    if (finished) {
      setShowPaw(false);
      return;
    }
    if (index === 0) {
      setShowPaw(true);
      const t = setTimeout(() => setShowPaw(false), 5000);
      return () => clearTimeout(t);
    }
    setShowPaw(false);
    return undefined;
  }, [index, finished]);

  // icons imported statically (ensure `react-icons` is installed)

  const select = (opt: number) => {
    const next = [...answers];
    next[index] = opt;
    setAnswers(next);
  };

  const nextQ = () => {
    if (index < questions.length - 1) setIndex((i) => i + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((i) => i - 1);
  };

  const submit = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) s += 1;
    });
    const pct = Math.round((s / questions.length) * 100);
    setScore(pct);
    setFinished(true);
  };

  // animate displayedScore from 0 -> score when finished
  useEffect(() => {
    if (!finished) return;

    let stopped = false;

    (async () => {
      setDisplayedScore(0);
      try {
        const fm = await import("framer-motion");
        if (stopped) return;
        const controls = fm.animate(0, score, {
          duration: 1.4,
          onUpdate: (v: number) => setDisplayedScore(Math.round(v)),
        });
        return () => controls.stop();
      } catch {
        // fallback if framer-motion is not installed: simple interval
        const start = Date.now();
        const dur = 1400;
        const from = 0;
        const to = score;
        const iv = setInterval(() => {
          const t = Math.min(1, (Date.now() - start) / dur);
          const v = Math.round(from + (to - from) * t);
          setDisplayedScore(v);
          if (t === 1) clearInterval(iv);
        }, 16);
        return () => clearInterval(iv);
      }
    })();

    return () => { stopped = true; };
  }, [finished, score]);

  return (
    <div
      className="bg-white w-full min-w-[1920px] h-[1080px] relative"
      data-model-id="18:359"
    >
      <div className="absolute top-0 left-0 w-[1920px] h-[1080px] backdrop-blur-[100px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(100px)_brightness(100%)] bg-[linear-gradient(135deg,rgba(190,207,238,1)_0%,rgba(113,198,226,1)_50%,rgba(217,244,250,1)_75%,rgba(190,207,238,1)_100%)]" />

      <div className="absolute top-[calc(50.00%_-_460px)] left-[calc(50.00%_-_812px)] w-[1625px] h-[920px] rounded-[50px] border-[0.72px] border-solid border-white shadow-[0px_43.63px_69.16px_#000000a1] backdrop-blur-[6.97px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.97px)_brightness(100%)] bg-[linear-gradient(129deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.12)_47%,rgba(255,255,255,0.4)_100%)]" />

      <div className="absolute top-[calc(50.00%_-_428px)] left-[calc(50.00%_-_771px)] w-[1542px] h-[856px] bg-[#f4fdff] rounded-[42px]" />

      {/* top floating nav removed - using the nav placed directly below options */}

      {!finished && (
        <>
          <div className="absolute top-[206px] left-[calc(50.00%_-_459px)] w-[919px] h-[102px] flex items-center justify-center bg-[linear-gradient(90deg,rgba(21,49,61,1)_0%,rgba(60,171,218,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'DM_Serif_Display',Helvetica] font-normal italic text-transparent text-[90px] text-center tracking-[-4.00px] leading-6">
            Test Your Knowledge
          </div>

          <div className="flex w-[422px] h-[45px] items-center justify-center gap-2.5 px-[31px] py-2.5 absolute top-[312px] left-[749px] bg-white rounded-lg">
            <p className="relative w-fit mt-[-0.50px] [font-family:'Manrope',Helvetica] font-medium text-[#15313d] text-xl text-center tracking-[-0.31px] leading-6 whitespace-nowrap">
              Answer all questions to see your results
            </p>
          </div>
        </>
      )}

      <img
        className="absolute top-[406px] left-[calc(50.00%_-_452px)] w-[900px] h-2 object-cover"
        alt="Group"
        src="https://c.animaapp.com/mj2bq6np07M1Rj/img/group-1.png"
      />

      {/* Question header */}
      <div className="flex w-[896px] h-[78px] items-center justify-center gap-2.5 px-[277px] py-6 absolute top-[460px] left-[512px] rounded-[10px] border border-solid border-[#95e4ff] bg-[linear-gradient(57deg,rgba(198,233,247,1)_0%,rgba(229,248,255,1)_100%)]">
        <p className="relative w-fit ml-[-0.50px] mr-[-0.50px] [font-family:'Inter',Helvetica] font-semibold text-[#15313d] text-[22px] text-center tracking-[-0.31px] leading-6 whitespace-nowrap">
          {finished ? "" : questions[index].text}
        </p>
      </div>

      <img
        className="absolute top-[-1240px] left-[137px] w-[377px] h-[565px] object-cover"
        alt="Image"
      />

      <img
        className="absolute top-[795px] left-[241px] w-[173px] h-[173px] object-cover"
        alt="Zcxoerni"
        src="https://c.animaapp.com/mj2bq6np07M1Rj/img/zcxoe8rni-1.png"
      />

      {!finished && (
        <div className="flex flex-col w-[897px] items-start gap-3.5 absolute top-[555px] left-[512px]">
          {questions[index].options.map((opt, i) => (
            <div key={i} onClick={() => select(i)}>
              <Frame
                className="!top-[unset] cursor-pointer"
                divClassName="!mr-[-35.00px] !ml-[-35.00px]"
                property1={answers[index] === i ? "variant-3" : "default"}
                text={opt}
              />
            </div>
          ))}

          <div className="h-6" />

          {/* navigation buttons below options to avoid overlapping option clicks */}
          <div className="w-full flex justify-center gap-4 mt-2">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous"
              className="p-2 bg-white border rounded shadow flex items-center justify-center"
            >
              <FiArrowLeft size={20} />
            </button>

            <button
              onClick={() => { if (index < questions.length - 1) nextQ(); else submit(); }}
              aria-label={index < questions.length - 1 ? 'Next' : 'Submit'}
              className="p-2 bg-[#cfeffb] rounded shadow flex items-center justify-center"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      )}

      {finished && (
        <div className="absolute top-[420px] left-[512px] w-[896px] h-[300px] flex flex-col items-center justify-center">
          <div className="mb-6 [font-family:'Manrope',Helvetica] text-sm text-[#15313d] bg-white/60 px-3 py-1 rounded">Keep Learning!</div>
          <div className="text-center [font-family:'DM_Serif_Display',Helvetica] text-[48px] text-[#15313d]">Your Final score is</div>
          <div className="mt-4 flex items-baseline gap-2">
            <div className="text-[96px] font-bold text-[#15313d]">{displayedScore}</div>
            <div className="text-[32px] text-[#15313d]">%</div>
          </div>
          <button
            onClick={() => {
              setIndex(0);
              setAnswers(Array(questions.length).fill(null));
              setFinished(false);
              setScore(0);
            }}
            className="mt-6 px-4 py-2 bg-[#cfeffb] rounded"
          >
            Start Again
          </button>
        </div>
      )}

      {showPaw && (
        <div className="absolute w-[10.34%] h-[8.89%] top-[67.13%] left-[4.90%] rotate-180">
          <img
            className="top-0.5 left-px w-[194px] h-[92px] absolute -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/mj2bq6np07M1Rj/img/vector-9.svg"
          />

          <img
            className="w-[98.99%] h-full top-0 left-0 absolute -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/mj2bq6np07M1Rj/img/vector-2.svg"
          />

          <img
            className="w-[2.60%] h-[3.15%] top-[8.18%] left-[88.74%] absolute -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/mj2bq6np07M1Rj/img/vector-1.svg"
          />

          <img
            className="w-0 h-[2.93%] top-[28.72%] left-[96.63%] absolute -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/mj2bq6np07M1Rj/img/vector-4.svg"
          />

          <img
            className="w-0 h-0 top-[11.75%] left-[92.15%] absolute -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/mj2bq6np07M1Rj/img/vector.svg"
          />

          <img
            className="w-0 h-0 top-[9.44%] left-[91.87%] absolute -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/mj2bq6np07M1Rj/img/vector-6.svg"
          />

          <img
            className="w-0 h-0 top-[32.41%] left-[96.98%] absolute -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/mj2bq6np07M1Rj/img/vector-5.svg"
          />

          <img
            className="w-0 h-0 top-[27.39%] left-[96.59%] absolute -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/mj2bq6np07M1Rj/img/vector-3.svg"
          />

          <div className="absolute top-[45px] left-[25px] rotate-[-177.44deg] [font-family:'Caveat_Brush',Helvetica] font-normal text-[#15313d] text-[32.7px] text-center tracking-[-0.82px] leading-[19.6px] whitespace-nowrap">
            Best of Luck !
          </div>
        </div>
      )}
    </div>
  );
};
