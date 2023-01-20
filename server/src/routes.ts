import { FastifyInstance } from "fastify";
import { z } from "zod";
import dayjs from "dayjs";
import { prisma } from "./lib/prisma";


export async function appRoutes(app: FastifyInstance) {

    app.post('/habits', async (request) => {
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(z.number().min(0).max(6))
        });

        const { title, weekDays } = createHabitBody.parse(request.body);

        const today = dayjs().startOf('day').toDate()

        await prisma.habit.create({
            data: {
                title,
                create_at: today,
                WeekDays: {
                    create: weekDays.map(weekDays => {
                        return {
                            week_day: weekDays,
                        }
                    })
                }
            }
        })
    })

    app.get('/day', async (request) => {
        const getDayParams = z.object({
            date: z.coerce.date()
        })

        const { date } = getDayParams.parse(request.query)

        const parsedDate = dayjs(date).startOf('day')
        const weekDay = parsedDate.get('day')

        const possibleHabits = await prisma.habit.findMany({
            where:{
                create_at:{
                    lte: date,
                },
                WeekDays:{
                    some:{
                        week_day: weekDay,
                    }
                }
            }
        })

        const day = await prisma.day.findUnique({
            where:{
                date: parsedDate.toDate()
            },
            include:{
                dayHabit:true,
            }
        })

        const completedHabits = day?.dayHabit.map(dayHabit =>{
            return dayHabit.habit_id
        })

        return{
            possibleHabits, 
            completedHabits
        }
    })

}