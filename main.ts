Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(2000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
        basic.showIcon(IconNames.No)
    }
})
