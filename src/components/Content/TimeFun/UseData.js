import React from "react";

const useDate = () => {

    const locale = 'ru';
    const [today, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 10 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = ` ${(hour < 12 && 'Доброе утро') || (hour < 17 && 'Добрый день') || ' Добрый вечер'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });

    return {
        date,
        time,
        wish,
    };
}

export default useDate;