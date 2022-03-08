import { endAdventure } from '..';
import { playCroquet } from './4_croquet';
import { askQuestion, clear, print } from '../console';

const moves= ['Push ups', 'Planks'] as const;
type workoutMove = typeof moves[number];

interface Move {
  name: workoutMove;
  reps: 5 | 12;
}

export function workout(): void {  
  const move: Move = {name: 'Planks', reps: 12}
  clear(true)
  print(`It's time to workout and gain some strength 💪 `)
  if((move.name === 'Push ups' || move.name === 'Planks') && move.reps === 5) {
    print(`You have only done 5 ${move.name} and sorry that is not enough to pass 😓`)
    return endAdventure()
  } else {
    print(`Well done! You have done 12 reps of ${move.name} 👏`)
    print(`🏑 Time for a nice game of croquet! 🏑`);
	  return askQuestion('Press ENTER to continue! ', playCroquet);
  }
}