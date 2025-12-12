import React from "react";
import type { Question } from "../../data/questions";

interface Props {
  questions: Question[];
  answers: (number | null)[];
  onContinue: () => void;
}

const Marks = ({ questions, answers, onContinue }: Props) => {
  return (
    <div className="absolute top-[380px] left-[512px] w-[896px] bg-white/40 rounded p-6 shadow-lg">
      <h3 className="text-center text-lg font-semibold mb-4">Review Your Answers</h3>
      <div className="space-y-3 max-h-[300px] overflow-auto">
        {questions.map((q, i) => {
          const user = answers[i];
          const correct = q.correctIndex;
          const isCorrect = user === correct;
          return (
            <div key={q.id} className="p-3 rounded border bg-white/60">
              <div className="font-medium">{q.id}. {q.text}</div>
              <div className="mt-2 text-sm">
                <div>User: {user === null ? "—" : q.options[user]}</div>
                <div>Correct: {q.options[correct]}</div>
              </div>
              <div className={`mt-2 inline-block px-2 py-1 rounded text-sm ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {isCorrect ? '1' : '0'}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center">
        <button onClick={onContinue} className="px-4 py-2 bg-[#cfeffb] rounded">Show Final Score</button>
      </div>
    </div>
  );
};

export default Marks;
