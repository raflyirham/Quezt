import React from "react";
import Index from "./Index";

import { Link, usePage } from "@inertiajs/react";
import Pagination from "../../../Components/Pagination/Pagination";
import ProfileContentCard from "../../../Components/ProfileContentCard/ProfileContentCard";

export default function Question({ user, questions }) {

    const questionSlice = (question) => {
        if (question.length > 200) {
            return question.slice(0, 200) + "...";
        }
        return question;
    }

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
                {questions.data.length > 0 ? (
                    <>
                        {

                            questions.data.map((question, index) => (
                                <ProfileContentCard key={index} link={`/pertanyaan/${question.QuestionID}`} title={question.questiondetail.QuestionTitle} detail={questionSlice(deleteHTMLTag(question.questiondetail.QuestionDetail))} courseName={question.course.CourseName} majorName={question.course.major.MajorName} date={convertDate(
                                    question.questiondetail.QuestionDate
                                )} description={"Lihat Pertanyaan >"} />
                            )
                            )
                        }

                        <Pagination links={questions.links} />
                    </>
                ) : (
                    <div className="tw-font-monda">
                        Belum ada pertanyaan yang ditanyakan oleh pengguna ini.
                    </div>
                )}

            </div>
        </Index>
    );
}
