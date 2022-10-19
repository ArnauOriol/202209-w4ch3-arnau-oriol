# Telefono

### DataLayer

- an array with the numbres from 0 to 9
- an array of displayed numbers
- isCalling boolean

### ModifiedData

- reveive new numbers to the array of displayed numbers
- delete the last number of the array of displayed numbers
- change the status of isCalling when the user is calling or not

## App

### Show data

- the info component
- the display component
- the actions component
- the keyboard component

## Info

### Show data

- "Calling..." when

## Display

### Show data

- the selected array of numbers received

## Actions

### Show data

- the anchors call and hang

## Call Action

### Show data

- the call button when isCalling is false

### get actions

- set isCalling to true

## Hang Action

### Show data

- the hang button when isCalling is true

### get actions

- set isCalling to false

## Keyboard

### Show data

- buttons from 0 to 9
- delete button

### get actions

- add number to display number array onclick

## Number key

### get actions

- add number to display number array onclick

## Delete key

### get actions

- delete number to display number array onclick
