import { Component, OnInit, OnDestroy } from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.scss']
})
export class MissionControlComponent implements OnInit, OnDestroy {
  astronauts = ['Василий', 'Юрий', 'Андрей'];
  history: string[] = [];
  missions = ['Полететь на Луну!', 'Полететь на Марс!', 'Полететь на Венеру!'];
  subscription: Subscription;
  nextMission = 0;

  constructor(private missionService: MissionService) {}

  ngOnInit() {
    this.subscription = this.missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} готов принять участие в миссии!`);
      }
    );
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Миссия "${mission}" ждет своего героя!`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
