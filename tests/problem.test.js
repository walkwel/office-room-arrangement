const {problem} = require('../src/problem')

describe('Happy users should be', function() {
    it('with rows 5 columns 2 and users 8', function() {
        expect(problem(5, 2 ,8)).toEqual(7)
    })
    it('with rows 3 columns 5 and users 14', function() {
        expect(problem(3, 5 ,14)).toEqual(18)
    })
    it('with rows 1 columns 16 and users 1', function() {
        expect(problem(1, 16 ,1)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 1', function() {
        expect(problem(3, 5 ,1)).toEqual(0)
    })
    it('with rows 8 columns 2 and users 12', function() {
        expect(problem(8, 2 ,12)).toEqual(10)
    })
    it('with rows 16 columns 1 and users 1', function() {
        expect(problem(16, 1 ,1)).toEqual(0)
    })
    it('with rows 3 columns 3 and users 6', function() {
        expect(problem(3, 3 ,6)).toEqual(3)
    })
    it('with rows 2 columns 6 and users 12', function() {
        expect(problem(2, 6 ,12)).toEqual(16)
    })
    it('with rows 15 columns 1 and users 0', function() {
        expect(problem(15, 1 ,0)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 7', function() {
        expect(problem(5, 3 ,7)).toEqual(0)
    })
    it('with rows 4 columns 3 and users 5', function() {
        expect(problem(4, 3 ,5)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 11', function() {
        expect(problem(3, 5 ,11)).toEqual(8)
    })
    it('with rows 7 columns 2 and users 13', function() {
        expect(problem(7, 2 ,13)).toEqual(16)
    })
    it('with rows 15 columns 1 and users 6', function() {
        expect(problem(15, 1 ,6)).toEqual(0)
    })
    it('with rows 15 columns 1 and users 15', function() {
        expect(problem(15, 1 ,15)).toEqual(14)
    })
    it('with rows 4 columns 4 and users 9', function() {
        expect(problem(4, 4 ,9)).toEqual(2)
    })
    it('with rows 5 columns 3 and users 8', function() {
        expect(problem(5, 3 ,8)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 6', function() {
        expect(problem(3, 5 ,6)).toEqual(0)
    })
    it('with rows 16 columns 1 and users 7', function() {
        expect(problem(16, 1 ,7)).toEqual(0)
    })
    it('with rows 1 columns 15 and users 7', function() {
        expect(problem(1, 15 ,7)).toEqual(0)
    })
    it('with rows 4 columns 3 and users 12', function() {
        expect(problem(4, 3 ,12)).toEqual(17)
    })
    it('with rows 5 columns 3 and users 13', function() {
        expect(problem(5, 3 ,13)).toEqual(14)
    })
    it('with rows 2 columns 4 and users 5', function() {
        expect(problem(2, 4 ,5)).toEqual(2)
    })
    it('with rows 5 columns 3 and users 5', function() {
        expect(problem(5, 3 ,5)).toEqual(0)
    })
    it('with rows 16 columns 1 and users 16', function() {
        expect(problem(16, 1 ,16)).toEqual(15)
    })
    it('with rows 2 columns 5 and users 8', function() {
        expect(problem(2, 5 ,8)).toEqual(7)
    })
    it('with rows 5 columns 3 and users 4', function() {
        expect(problem(5, 3 ,4)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 10', function() {
        expect(problem(5, 3 ,10)).toEqual(6)
    })
    it('with rows 4 columns 4 and users 7', function() {
        expect(problem(4, 4 ,7)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 9', function() {
        expect(problem(3, 5 ,9)).toEqual(3)
    })
    it('with rows 4 columns 2 and users 2', function() {
        expect(problem(4, 2 ,2)).toEqual(0)
    })
    it('with rows 4 columns 4 and users 15', function() {
        expect(problem(4, 4 ,15)).toEqual(20)
    })
    it('with rows 2 columns 2 and users 4', function() {
        expect(problem(2, 2 ,4)).toEqual(4)
    })
    it('with rows 5 columns 3 and users 11', function() {
        expect(problem(5, 3 ,11)).toEqual(8)
    })
    it('with rows 4 columns 4 and users 8', function() {
        expect(problem(4, 4 ,8)).toEqual(0)
    })
    it('with rows 1 columns 16 and users 9', function() {
        expect(problem(1, 16 ,9)).toEqual(1)
    })
    it('with rows 4 columns 4 and users 16', function() {
        expect(problem(4, 4 ,16)).toEqual(24)
    })
    it('with rows 1 columns 15 and users 6', function() {
        expect(problem(1, 15 ,6)).toEqual(0)
    })
    it('with rows 15 columns 1 and users 8', function() {
        expect(problem(15, 1 ,8)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 6', function() {
        expect(problem(5, 3 ,6)).toEqual(0)
    })
    it('with rows 16 columns 1 and users 9', function() {
        expect(problem(16, 1 ,9)).toEqual(1)
    })
    it('with rows 3 columns 5 and users 15', function() {
        expect(problem(3, 5 ,15)).toEqual(22)
    })
    it('with rows 1 columns 15 and users 1', function() {
        expect(problem(1, 15 ,1)).toEqual(0)
    })
    it('with rows 1 columns 15 and users 0', function() {
        expect(problem(1, 15 ,0)).toEqual(0)
    })
    it('with rows 2 columns 5 and users 9', function() {
        expect(problem(2, 5 ,9)).toEqual(10)
    })
    it('with rows 3 columns 5 and users 10', function() {
        expect(problem(3, 5 ,10)).toEqual(6)
    })
    it('with rows 1 columns 15 and users 15', function() {
        expect(problem(1, 15 ,15)).toEqual(14)
    })
    it('with rows 3 columns 2 and users 0', function() {
        expect(problem(3, 2 ,0)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 2', function() {
        expect(problem(5, 3 ,2)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 1', function() {
        expect(problem(5, 3 ,1)).toEqual(0)
    })
    it('with rows 5 columns 2 and users 4', function() {
        expect(problem(5, 2 ,4)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 4', function() {
        expect(problem(3, 5 ,4)).toEqual(0)
    })
    it('with rows 2 columns 7 and users 13', function() {
        expect(problem(2, 7 ,13)).toEqual(16)
    })
    it('with rows 3 columns 3 and users 0', function() {
        expect(problem(3, 3 ,0)).toEqual(0)
    })
    it('with rows 7 columns 2 and users 11', function() {
        expect(problem(7, 2 ,11)).toEqual(10)
    })
    it('with rows 4 columns 4 and users 0', function() {
        expect(problem(4, 4 ,0)).toEqual(0)
    })
    it('with rows 1 columns 1 and users 0', function() {
        expect(problem(1, 1 ,0)).toEqual(0)
    })
    it('with rows 2 columns 6 and users 9', function() {
        expect(problem(2, 6 ,9)).toEqual(7)
    })
    it('with rows 3 columns 5 and users 3', function() {
        expect(problem(3, 5 ,3)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 15', function() {
        expect(problem(5, 3 ,15)).toEqual(22)
    })
    it('with rows 5 columns 2 and users 6', function() {
        expect(problem(5, 2 ,6)).toEqual(2)
    })
    it('with rows 3 columns 4 and users 12', function() {
        expect(problem(3, 4 ,12)).toEqual(17)
    })
    it('with rows 2 columns 3 and users 6', function() {
        expect(problem(2, 3 ,6)).toEqual(7)
    })
    it('with rows 1 columns 1 and users 1', function() {
        expect(problem(1, 1 ,1)).toEqual(0)
    })
    it('with rows 15 columns 1 and users 1', function() {
        expect(problem(15, 1 ,1)).toEqual(0)
    })
    it('with rows 1 columns 16 and users 16', function() {
        expect(problem(1, 16 ,16)).toEqual(15)
    })
    it('with rows 2 columns 2 and users 2', function() {
        expect(problem(2, 2 ,2)).toEqual(0)
    })
    it('with rows 3 columns 3 and users 9', function() {
        expect(problem(3, 3 ,9)).toEqual(12)
    })
    it('with rows 16 columns 1 and users 8', function() {
        expect(problem(16, 1 ,8)).toEqual(0)
    })
    it('with rows 9 columns 1 and users 6', function() {
        expect(problem(9, 1 ,6)).toEqual(2)
    })
    it('with rows 5 columns 3 and users 12', function() {
        expect(problem(5, 3 ,12)).toEqual(11)
    })
    it('with rows 2 columns 2 and users 3', function() {
        expect(problem(2, 2 ,3)).toEqual(2)
    })
    it('with rows 3 columns 5 and users 7', function() {
        expect(problem(3, 5 ,7)).toEqual(0)
    })
    it('with rows 7 columns 2 and users 0', function() {
        expect(problem(7, 2 ,0)).toEqual(0)
    })
    it('with rows 4 columns 3 and users 6', function() {
        expect(problem(4, 3 ,6)).toEqual(0)
    })
    it('with rows 2 columns 3 and users 4', function() {
        expect(problem(2, 3 ,4)).toEqual(2)
    })
    it('with rows 1 columns 15 and users 8', function() {
        expect(problem(1, 15 ,8)).toEqual(0)
    })
    it('with rows 16 columns 1 and users 0', function() {
        expect(problem(16, 1 ,0)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 9', function() {
        expect(problem(5, 3 ,9)).toEqual(3)
    })
    it('with rows 15 columns 1 and users 7', function() {
        expect(problem(15, 1 ,7)).toEqual(0)
    })
    it('with rows 2 columns 4 and users 6', function() {
        expect(problem(2, 4 ,6)).toEqual(4)
    })
    it('with rows 1 columns 16 and users 7', function() {
        expect(problem(1, 16 ,7)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 12', function() {
        expect(problem(3, 5 ,12)).toEqual(11)
    })
    it('with rows 1 columns 16 and users 8', function() {
        expect(problem(1, 16 ,8)).toEqual(0)
    })
    it('with rows 4 columns 4 and users 1', function() {
        expect(problem(4, 4 ,1)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 0', function() {
        expect(problem(3, 5 ,0)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 8', function() {
        expect(problem(3, 5 ,8)).toEqual(0)
    })
    it('with rows 1 columns 16 and users 0', function() {
        expect(problem(1, 16 ,0)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 3', function() {
        expect(problem(5, 3 ,3)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 0', function() {
        expect(problem(5, 3 ,0)).toEqual(0)
    })
    it('with rows 1 columns 13 and users 9', function() {
        expect(problem(1, 13 ,9)).toEqual(4)
    })
    it('with rows 3 columns 5 and users 2', function() {
        expect(problem(3, 5 ,2)).toEqual(0)
    })
    it('with rows 1 columns 9 and users 6', function() {
        expect(problem(1, 9 ,6)).toEqual(2)
    })
    it('with rows 6 columns 2 and users 12', function() {
        expect(problem(6, 2 ,12)).toEqual(16)
    })
    it('with rows 4 columns 3 and users 8', function() {
        expect(problem(4, 3 ,8)).toEqual(4)
    })
    it('with rows 3 columns 5 and users 5', function() {
        expect(problem(3, 5 ,5)).toEqual(0)
    })
    it('with rows 5 columns 3 and users 14', function() {
        expect(problem(5, 3 ,14)).toEqual(18)
    })
    it('with rows 4 columns 3 and users 7', function() {
        expect(problem(4, 3 ,7)).toEqual(2)
    })
    it('with rows 6 columns 2 and users 4', function() {
        expect(problem(6, 2 ,4)).toEqual(0)
    })
    it('with rows 3 columns 5 and users 1', function() {
        expect(problem(3, 5 ,1)).toEqual(0)
    })

    

})