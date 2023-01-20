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

}