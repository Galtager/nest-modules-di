import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private readonly powerService: PowerService) { }

    compute(a: number, b: number) {
        try {
            this.powerService.supplyPower(10)
            return a + b;
        } catch (error) {
            throw error
        }
    }
}
