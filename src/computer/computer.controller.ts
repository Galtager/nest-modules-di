import { BadRequestException, Controller, Get, NotFoundException } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {

    constructor(private cpuService: CpuService, private diskService: DiskService) { }
    @Get()
    run() {
        try {
            return [
                this.cpuService.compute(12, 23),
                this.diskService.getData()
            ]
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}
