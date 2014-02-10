# Day Planner

[Online Example][http://day-planner.herokuapp.com/#/]

![ScreenShot](http://i.imgur.com/SDfV5Bs.png)

### Known Bugs
1. If you add an event that occurs during the same time frame as two other
events AND it doesn't start before both events AND events have same
duration the events don't align correctly and it is drawn underneath.
2. There appears to be some edge case where events don't align
correctly. 


#### Todo
1. Clean up code.
2. Refactor so everything isn't in global scope.
3. Tests
4. Update elements instead of redrawing everything everytime we add
something (redrawing everything is super expensive).
5. Move everything to Angular, turn d3 code into a directive.
6. Add form validation (Shouldn't let you submit nothing. Shouldn't
   allow end time happening before start time. Only allow 0-23 times). 
