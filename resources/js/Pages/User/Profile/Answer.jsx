import React from "react";
import Index from "./Index";

import Pagination from "../../../Components/Pagination/Pagination";
import ProfileContentCard from "../../../Components/ProfileContentCard/ProfileContentCard";

export default function Answer({ user, answers }) {
    const answerSlice = (answer) => {
        if (answer.length > 200) {
            return answer.slice(0, 200) + "...";
        }
        return answer;
    };

    const convertDate = (date) => {
        const event = new Date(date);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return event.toLocaleDateString("id-ID", options);
    };

    const deleteHTMLTag = (text) => {
        const regex = /(<([^>]+)>)/gi;
        const result = text.replace(regex, " ");
        return result;
    }

    return (
        <Index user={user}>
            <div className="tw-flex tw-flex-col tw-gap-y-4 tw-mt-4">
                {answers.data.length > 0 ? (
                    <>
                        {

                            answers.data.map((answer, index) => (
                                <ProfileContentCard key={index} link={`/pertanyaan/${answer.questionanswers[0].questionheader.QuestionID}`} title={""} detail={answerSlice(deleteHTMLTag(answer.answerdetail.AnswerDetail))} courseName={answer.questionanswers[0].questionheader.course.CourseName} majorName={answer.questionanswers[0].questionheader.course.major.MajorName} date={convertDate(
                                    answer.answerdetail.AnswerDate
                                )} description={"Lihat Jawaban >"} />
                            )
                            )
                        }

                        <Pagination links={answers.links} />
                    </>
                ) : (
                    <div className="tw-font-monda">
                        Belum ada jawaban yang dijawab oleh pengguna ini.
                    </div>
                )}
            </div>
        </Index>
    );
}
