import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private readonly powerService: PowerService) { }

    getData() {
        try {
            this.powerService.supplyPower(20)
            return 'data';

        } catch (error) {
            throw error
        }
    }
}
