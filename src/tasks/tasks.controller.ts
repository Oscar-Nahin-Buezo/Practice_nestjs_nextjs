import { Controller,Get, Put, Delete, Post, Body, HttpCode, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';

@Controller('tasks')
export class TasksController {
    @Get('/test')
    getTasks(): {hello: CreateTaskDto}{
        return {"hello":{"title":"Estudiar nest","description":"estudiar 2 horas"}};
    }

    @Post('/addTask')
    createTask(@Body()task: CreateTaskDto){
        console.log(task.title);
        return "Creando Tarea"
    }

    @Put('/updateTask/:id')
    updateTask(@Body()task:CreateTaskDto, @Param('id')id){
        console.log("Se actualizo la tarea: "+id);
        console.log(task);
        return "Actualizando tarea"
    }

    @Delete('/deleteTask/:id')
    deleteTask(@Param('id') id){
        console.log(id);
        const mensaje = "Borrando tarea "+id;
        return mensaje;
    }
}
