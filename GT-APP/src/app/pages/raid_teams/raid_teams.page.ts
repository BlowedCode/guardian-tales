import { Component } from '@angular/core';

@Component({
  selector: 'raid_teams',
  templateUrl: './raid_teams.page.html',
  styleUrls: ['./raid_teams.page.scss']
})
export class RaidTeamsPage {
  public EarthTeams: Team[] = [
    {
      heroes: [
        { name: "Mayreel", weapon: "Mayreel" },
        { name: "Kamael", weapon: "Kamael" },
        { name: "Tinia", weapon: "Tinia" },
        { name: "Andras", weapon: "Kamael" }
      ]
    },
    {
      heroes: [
        { name: "Mayreel", weapon: "Mayreel" },
        { name: "Kamael", weapon: "Kamael" },
        { name: "Tinia", weapon: "Tinia" },
        { name: "Coco", weapon: "Coco" }
      ]
    },
    {
      heroes: [
        { name: "Mayreel", weapon: "Mayreel" },
        { name: "Kamael", weapon: "Kamael" },
        { name: "Tinia", weapon: "Tinia" },
        { name: "Marianne", weapon: "Marianne" }
      ]
    },
    {
      heroes: [
        { name: "Mayreel", weapon: "Mayreel" },
        { name: "Kamael", weapon: "Kamael" },
        { name: "Tinia", weapon: "Tinia" },
        { name: "Veronica", weapon: "Kamael" }
      ]
    }
  ];

  public WaterTeams = [
    {
      heroes: [
        { name: "Garam", weapon: "Garam" },
        { name: "Nari", weapon: "Ara" },
        { name: "Orca", weapon: "Orca" },
        { name: "Andras", weapon: "Andras" }
      ]
    },
    {
      heroes: [
        { name: "Veronica", weapon: "Veronica" },
        { name: "Lucy", weapon: "Hana" },
        { name: "Garam", weapon: "Garam" },
        { name: "Orca", weapon: "Orca" }
      ]
    },
    {
      heroes: [
        { name: "Veronica", weapon: "Veronica" },
        { name: "AA72", weapon: "AA72" },
        { name: "Garam", weapon: "Garam" },
        { name: "Orca", weapon: "Orca" }
      ]
    },
    {
      heroes: [
        { name: "AA72", weapon: "AA72" },
        { name: "Orca", weapon: "Orca" },
        { name: "Garam", weapon: "Garam" },
        { name: "Nari", weapon: "Ara" }
      ]
    },
    {
      heroes: [
        { name: "Garam", weapon: "Garam" },
        { name: "Kamael", weapon: "Hana" },
        { name: "Tinia", weapon: "Catherine" },
        { name: "Orca", weapon: "Orca" },
      ]
    },
    {
      heroes: [
        { name: "Garam", weapon: "Garam" },
        { name: "Lucy", weapon: "Hana" },
        { name: "Nari", weapon: "Ara" },
        { name: "Orca", weapon: "Orca" }
      ]
    }
  ];

  public FireTeams = [
    {
      heroes: [
        { name: "Vishuvac", weapon: "Vishuvac2" },
        { name: "Lucy", weapon: "Lucy" },
        { name: "Nari", weapon: "Miya" },
        { name: "Andras", weapon: "Girgas" }
      ]
    },
    {
      heroes: [
        { name: "Lucy", weapon: "Lucy" },
        { name: "Nari", weapon: "Miya" },
        { name: "Vishuvac", weapon: "Vishuvac2" },
        { name: "Veronica", weapon: "Girgas" }
      ]
    },
    {
      heroes: [
        { name: "Lucy", weapon: "Lucy" },
        { name: "Nari", weapon: "Miya" },
        { name: "Clara", weapon: "Clara" },
        { name: "Vishuvac", weapon: "Vishuvac2" }
      ]
    },
    {
      heroes: [
        { name: "Ascent_Elvira", weapon: "Elvira" },
        { name: "Lucy", weapon: "Lucy" },
        { name: "Nari", weapon: "Miya" },
        { name: "Vishuvac", weapon: "Vishuvac2" }
      ]
    }
  ];

  public LightTeams = [
    {
      heroes: [
        { name: "Gabriel", weapon: "Gabriel" },
        { name: "Nari", weapon: "Priscilla" },
        { name: "Tinia", weapon: "YellowDragonsBow" },
        { name: "Andras", weapon: "FP" }
      ]
    },
    {
      heroes: [
        { name: "Gabriel", weapon: "Gabriel" },
        { name: "Nari", weapon: "Priscilla" },
        { name: "Tinia", weapon: "YellowDragonsBow" },
        { name: "Oghma", weapon: "Oghma2" }
      ]
    },
    {
      heroes: [
        { name: "Mk.99", weapon: "Mk.99" },
        { name: "Gabriel", weapon: "Gabriel" },
        { name: "Eleanor", weapon: "Eleanor" },
        { name: "Andras", weapon: "FP" }
      ]
    },
    {
      heroes: [
        { name: "Mk.99", weapon: "Mk.99" },
        { name: "Gabriel", weapon: "Gabriel" },
        { name: "Eleanor", weapon: "Eleanor" },
        { name: "Nari", weapon: "Priscilla" }
      ]
    },
    {
      heroes: [
        { name: "Mk.99", weapon: "Mk.99" },
        { name: "Gabriel", weapon: "Gabriel" },
        { name: "Eleanor", weapon: "Eleanor" },
        { name: "Tinia", weapon: "YellowDragonsBow" }
      ]
    }
  ];

  public DarkTeams = [
    {
      heroes: [
        { name: "Claude", weapon: "Claude" },
        { name: "Kamael", weapon: "Xellos" },
        { name: "Tinia", weapon: "WingOfTerror" },
        { name: "Oghma", weapon: "Oghma2" }
      ]
    },
    {
      heroes: [
        { name: "Claude", weapon: "Claude" },
        { name: "Nari", weapon: "Gremory" },
        { name: "Oghma", weapon: "Oghma2" },
        { name: "Arabelle", weapon: "Arabelle" }
      ]
    },
    {
      heroes: [
        { name: "Oghma", weapon: "Oghma2" },
        { name: "Kamael", weapon: "Xellos" },
        { name: "Claude", weapon: "Claude" },
        { name: "Arabelle", weapon: "Arabelle" }
      ]
    },
    {
      heroes: [
        { name: "Oghma", weapon: "Oghma2" },
        { name: "Nari", weapon: "Gremory" },
        { name: "Claude", weapon: "Claude" },
        { name: "Arabelle", weapon: "Arabelle" }
      ]
    }
  ];

  public BasicTeams = [
    {
      heroes: [
        { name: "Knight_F", weapon: "Knight2" },
        { name: "Nari", weapon: "Nari" },
        { name: "Kanna", weapon: "Kanna" },
        { name: "Andras", weapon: "Idol_Eva" }
      ]
    },
    {
      heroes: [
        { name: "Lucy", weapon: "Idol_Eva" },
        { name: "Nari", weapon: "Nari" },
        { name: "Kanna", weapon: "Kanna" },
        { name: "Knight_F", weapon: "Knight2" }
      ]
    }
    ,
    {
      heroes: [
        { name: "Knight_F", weapon: "Knight2" },
        { name: "Nari", weapon: "Nari" },
        { name: "Kanna", weapon: "Kanna" },
        { name: "Coco", weapon: "Idol_Eva" }
      ]
    }
    ,
    {
      heroes: [
        { name: "FK", weapon: "FK" },
        { name: "Nari", weapon: "Nari" },
        { name: "Kanna", weapon: "Kanna" },
        { name: "Knight_F", weapon: "Knight2" }
      ]
    }
    ,
    {
      heroes: [
        { name: "Summer_Loraine", weapon: "Summer_Loraine" },
        { name: "Nari", weapon: "Nari" },
        { name: "Kanna", weapon: "Kanna" },
        { name: "Coco", weapon: "Idol_Eva" }
      ]
    }
  ];
}

export class GearedHero {
  name: string;
  weapon: string;
}

export class Team {
  public heroes: GearedHero[];
}