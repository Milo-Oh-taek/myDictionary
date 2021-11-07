import { useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import Word, { IWord } from './Word';

const Day = () => {

    const {day} = useParams<{ day: string }>();
    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
    
    return (
        <div>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day
