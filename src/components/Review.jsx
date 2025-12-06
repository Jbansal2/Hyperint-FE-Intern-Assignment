import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const Review = () => {

    const summary = {
        average: 5.0,
        totalReviews: 1930,
        breakdown: [
            { stars: 5, count: 1900 },
            { stars: 4, count: 63 },
            { stars: 3, count: 0 },
            { stars: 2, count: 0 },
            { stars: 1, count: 0 },
        ],
    };

    const reviews = [
        {
            id: 1,
            name: "sivamani",
            rating: 4,
            title: "sdfghfghjkhjcx",
            text: "asdfgsdfghjhgfdxz",
        },
        {
            id: 2,
            name: "Deepika",
            rating: 5,
            title: "It is very Good Product",
            text: "",
        },
        {
            id: 3,
            name: "Vivaan Rao",
            rating: 5,
            title: "Prompt Delivery",
            text: "The team was very helpful and guided me throughout my purchase.",
        },
        {
            id: 4,
            name: "Krishna Verma",
            rating: 5,
            title: "Fast Response",
            text: "",
        },
        {
            id: 5,
            name: "sivamani",
            rating: 4,
            title: "sdfghfghjkhjcx",
            text: "asdfgsdfghjhgfdxz",
        },
        {
            id: 6,
            name: "Deepika",
            rating: 5,
            title: "It is very Good Product",
            text: "",
        },
        {
            id: 7,
            name: "Vivaan Rao",
            rating: 5,
            title: "Prompt Delivery",
            text: "The team was very helpful and guided me throughout my purchase.",
        },
        {
            id: 8,
            name: "Krishna Verma",
            rating: 5,
            title: "Fast Response",
            text: "",
        },
    ];

    const maxCount = Math.max(...summary.breakdown.map((b) => b.count), 1);
    const Stars = ({ value }) => {
        const out = [];
        for (let i = 1; i <= 5; i++) {
            out.push(
                i <= value ? (
                    <AiFillStar key={i} className="text-yellow-400 inline-block" />
                ) : (
                    <AiOutlineStar key={i} className="text-yellow-400 inline-block opacity-40" />
                )
            );
        }
        return <span className="inline-flex gap-1 items-center">{out}</span>;
    };
    const initialVisible = 6;
    const [showAll, setShowAll] = useState(false);
    const showCount = showAll ? reviews.length : initialVisible;

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-semibold mb-3">Reviews and Ratings</h2>

                    <div className="flex items-start gap-6">
                        <div className="text-5xl font-extrabold">{summary.average.toFixed(1)}</div>

                        <div>
                            <div className="flex text-xl items-center gap-1">
                                <Stars value={5} />
                            </div>
                            <div className="text-sm text-gray-500 mt-2">Based on {summary.totalReviews.toLocaleString()} reviews</div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-3 w-full">
                        {summary.breakdown.map((b) => {
                            const pct = Math.round((b.count / maxCount) * 100);
                            return (
                                <div key={b.stars} className="flex items-center gap-4">
                                    <div className="w-8 text-sm text-gray-600">{b.stars} <span className='text-yellow-400'>★</span></div>

                                    <div className="flex-1 w-full bg-[#e5e7eb] rounded-full h-3 overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-300"
                                            style={{
                                                width: `${pct}%`,
                                                background: b.stars === 5 ? "#34d399" : "#fbbf24",
                                                minWidth: b.count > 0 ? "6px" : "0"
                                            }}
                                        />
                                    </div>

                                    <div className="w-[20px] text-right text-sm text-gray-600">{b.count}</div>

                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-6">
                        <button className="w-full md:w-100 border cursor-pointer border-gray-800 py-3 px-5 text-sm font-medium hover:bg-gray-50 transition">
                            Write A Review
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {reviews.slice(0, showCount).map((r) => (
                                <div
                                    key={r.id}
                                    className="border border-gray-200 rounded p-4 transition"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                            <FiUser />
                                        </div>

                                        <div className="flex-1">
                                            <div>
                                                <div className="text-sm text-gray-700 font-medium">{r.name}</div>
                                                <div className="mt-1">
                                                    <Stars value={r.rating} />
                                                </div>
                                            </div>

                                            {r.title && (
                                                <h4 className="mt-3 font-semibold text-gray-800">{r.title}</h4>
                                            )}

                                            {r.text && (
                                                <p className="mt-2 text-gray-600">{r.text}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        {reviews.length > initialVisible && (
                            <div className="pt-4">
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => setShowAll((s) => !s)}
                                        className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition"
                                    >
                                        {showAll ? "Show Less" : `Show More (${reviews.length - showCount} more)`}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review
