import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { isNil } from 'lodash';
import { UserExerciseSet } from '../../openapi/models/UserExerciseSet';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface ExerciseChartProps {
    exercise: string;
    exercisesComplete: UserExerciseSet[];
}

interface Chart {
    date: string;
    reps: number;
    force: number;
}

export default function ExerciseChart(props: ExerciseChartProps) {
    const { exercise, exercisesComplete } = props;

    const getChartData = (exercise: UserExerciseSet[]) => {
        //let result = Array;
        const result: Chart[] = [];

        exercise.reduce(function (res: any, value: any) {
            let onlyDate = value.endTime.split('T')[0];

            if (!isNil(res) && !res[onlyDate]) {
                res[onlyDate] = { date: onlyDate, reps: 0 };
                result.push(res[onlyDate])
            }
            res[onlyDate].reps += value.repetitionsObserved;
            res[onlyDate].force = value.weightObserved;
            return res;

        }, {});
        return result;
    }

    const renderChart = (exercise: string) => {
        const result = exercisesComplete.filter((a: UserExerciseSet) => a.exerciseName === exercise);
        const data = getChartData(result);
        const dates = data.map(d => d.date);
        const reps = data.map(d => d.reps);

        const chartData = {
            labels: dates,
            datasets: [
                {
                    label: exercise,
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: reps
                }
            ]
        }
        return chartData;
    }
    return (
        <>
            <Line
                data={renderChart(exercise)}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top' as const,
                        },
                    }
                }}
            />
        </>
    )
}