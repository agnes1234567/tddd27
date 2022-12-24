import pool from "../../database";
import { Request } from 'express';
import { json } from "body-parser";

export type Course = {
    id: number;
    course_code: string;
    course_name: string;
    hp: number;
    level: string;
    spring: boolean;
    fall: boolean;
    period1: number;
    period2: number;
    url: string;
  };

export function reformatCourse(course: Course): {
    id: number;
    course_code: string;
    course_name: string;
    hp: number;
    level: string;
    spring: boolean;
    fall: boolean;
    period1: number;
    period2: number;
    url: string;
  } {
    return {
      id: course['id'],
      course_code: course['course_code'],
      course_name: course['course_name'],
      hp: course['hp'],
      level: course['level'],
      spring: course['spring'],
      fall: course['fall'],
      period1: course['period1'],
      period2: course['period2'],
      url: course['url'],
    };
  }

export async function getCoursesFromDB(req: Request) {
    
    const {semester, full_term, 
        period1, period2} = req.body;
        if (semester && semester==="VT"){
            if (full_term){
                    return await pool.query('SELECT * FROM courses \
                    WHERE spring=true AND period1 IS NOT NULL AND \
                    period2 IS NOT NULL');
            } else if (period1){
                return await pool.query('SELECT * FROM courses \
                    WHERE spring=true AND period1=$1 AND \
                    period2 IS NULL', [period1])
            } else if (period2){
                        return await pool.query('SELECT * FROM courses \
                        WHERE spring=true AND period1 IS NULL AND \
                        period2=$1', [period2])
                        
                } else {
                    return await pool.query('SELECT * FROM courses WHERE spring=true');
                    }               
        } else if(semester && semester==="HT"){
            if (full_term){
                return await pool.query('SELECT * FROM courses \
                        WHERE fall=true AND period1 IS NOT NULL AND \
                        period2 IS NOT NULL');
            } else if (period1){
                return await pool.query('SELECT * FROM courses \
                        WHERE fall=true AND period1=$1 AND \
                        period2 IS NULL', [period1])
            } else if (period2){
                return await pool.query('SELECT * FROM courses \
                            WHERE fall=true AND period1 IS NULL AND \
                            period2=$1', [period2])
                            
                } else {
                    return await pool.query('SELECT * FROM courses WHERE fall=true');
                    }
            }
                    
            return await pool.query('SELECT * FROM courses WHERE 1 = 0');
}
