var app = require('../app');

angular.module('tasksModule').controller('taskDetailCtrl', taskFun);
taskFun.$inject = ['taskService', '$routeParams'];

function taskFun(taskService, $routeParams) {
   
	var mv = this;
	mv.taskID = $routeParams.taskId;

	mv.taskObj = taskService.getTask(mv.taskID);
}