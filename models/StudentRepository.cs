using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCDemo.models
{
    public class StudentRepository : IStudentRepository
    {
        public List<Student> students = new List<Student>();
        public StudentRepository()
        {
            students.Add(new Student(1,"xiaohong","class1","122@qq.com"));
            students.Add(new Student(2, "xx", "class2", "213@qq.com"));
            students.Add(new Student(3, "Hll", "class3", "112322@qq.com"));
            students.Add(new Student(4, "FAS", "class4", "12w2@qq.com"));
            students.Add(new Student(5,"AZ","class5","12sad2@qq.com"));

        }

        public Student GetStudent(int ID)
        {
            return students.FirstOrDefault(a => { return a.ID == ID; });
        }

        public List<Student> GetStudents()
        {
            return students;
        }
    }
}
