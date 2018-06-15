import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MissionService} from '../mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss']
})
export class AstronautComponent implements OnInit, OnDestroy {
  @Input() astronaut: string;

  mission = '< пока нет заявленных миссий >';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) { }

  ngOnInit() {
    this.subscription = this.missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
