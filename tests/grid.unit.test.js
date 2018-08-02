
var Grid = require('grid').grid;

console.log(Grid);

describe('Grid', function() {
  it('should add an entity to its location in the grid', function() {
    var grid = new Grid();
    var entity = { x: 3, y: 4 };
    grid.add(entity);
    expect(grid.get(3, 4).length).toBe(1);
    expect(grid.get(3, 4)[0]).toBe(entity);
  })

  it('should add an entity to the relevant grid tile', function() {
    var grid = new Grid(4);
    var entity = { x: 5, y: 6 };
    grid.add(entity);
    console.log(grid);
    expect(grid.get(1, 1).length).toBe(1);
    expect(grid.get(1, 1)[0]).toBe(entity);
  })

  it('should add an entity to the relevant grid tile if on edge/corner of new tile', function() {
    var grid = new Grid(4);
    var entity = { x: 4, y: 8 };
    grid.add(entity);
    console.log(grid);
    expect(grid.get(1, 2).length).toBe(1);
    expect(grid.get(1, 2)[0]).toBe(entity);
  })

  it('should add an entity to the relevant grid tile with non-integer x & y', function() {
    var grid = new Grid(4);
    var entity = { x: 3.999, y: 4.0001 };
    grid.add(entity);
    console.log(grid);
    expect(grid.get(0, 1).length).toBe(1);
    expect(grid.get(0, 1)[0]).toBe(entity);
  })

  it.skip('should add an entity to multiple grid tiles if it has width and height', function() {

  })
})