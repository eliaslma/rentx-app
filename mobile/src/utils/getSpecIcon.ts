import speed from '../assets/speed.svg'
import acceleration from '../assets/acceleration.svg'
import horsePower from '../assets/force.svg'
import gasoline from '../assets/gasoline.svg'
import exchange from '../assets/exchange.svg'
import people from '../assets/people.svg'
import electric from '../assets/energy.svg'
import hybrid from '../assets/hybrid.svg'
import car from '../assets/car.svg'

export function getSpecIcon(type: string){
    switch (type){
        case "speed":
            return speed;
        
        case "acceleration":
            return acceleration;
            
        case "turning_diameter":
            return horsePower;
            
        case "electric_motor":
            return electric;
            
        case "gasoline_motor":
            return gasoline;

        case "hybrid_motor":
            return hybrid
            
        case "exchange":
            return exchange;
            
        case "seats":
            return people;
            
        default:
            return car;
    }

}