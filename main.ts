let aantal_bochten = 0
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
        aantal_bochten += 1
        if (aantal_bochten % 2 == 1) {
            while (DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 29)
            }
        } else {
            while (DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 31)
            }
        }
    }
})
