import { useTimerContext } from "./TimerContext";

export default function useClockify() {
    const { timerValue } = useTimerContext();

    let minutes = Math.floor(timerValue / 60);
    let seconds = timerValue - (minutes * 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
}