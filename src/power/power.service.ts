import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {

    private power = 20
    supplyPower(watts: number) {
        if (watts > this.power) {
            throw ('not enough power')
        }
        console.log('supplying ' + watts + 'worth of power');
        this.power -= watts;
        console.log('power left ' + this.power)
    }
}
