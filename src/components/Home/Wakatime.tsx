import React, { useEffect, useState } from "react";

export default function Wakatime() {
    const [wakatime, setWakatime] = useState<any>();
        useEffect(() => {
            // Wakatime 데이터 가져오기 (한 번만 실행)
            fetch("https://api.imnya.ng/wakatime")
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        setWakatime(data.data);
                    }
                })
                .catch(error => console.error("Error fetching Wakatime data:", error));
        }, []);
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full md:w-[50%] p-4">
            <a className="text-2xl font-bold" href="https://wakatime.com/@imnyang" target="_blank" rel="noopener noreferrer">🍝 Wakatime</a>
            <p>Dashboards for developers</p>
            <br />
            {wakatime && wakatime.languages && (
                <div>
                    <p>총 시간: {(wakatime.human_readable_total)}</p>
                    <p>하루 평균: {wakatime.human_readable_daily_average}</p>
                    <br />

                    <p>가장 많이 사용한 언어:</p>
                    <ul>
                        {wakatime.languages.slice(0, 3).map((language: any, index: number) => (
                            <li key={index}>{index+1}. {language.name}: {language.percent}%</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>
    )
}