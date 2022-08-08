// Your code here
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(employee => createEmployeeRecord(employee))
}

const createTimeInEvent = function (employeeRec, dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    // const dateArr =  dateStamp.split(' ')
    // const hour = dateArr[0]
    // const date = dateArr[1]
    const eventObj = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent(employeeRec, dateStamp) {
    const dateArr = dateStamp.split(' ')
    const hour = dateArr[0]
    const date = dateArr[1]
    const eventObj = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(eventObj)
    return this
}

function hoursWorkedOnDate(record, date){
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === date)
    const outEvent = this.timeOutEvents.find(oEvent => oEvent.date === date)
    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(object, date){

}

function allWagesFor(object){

}

function calculatePayroll(array){

}