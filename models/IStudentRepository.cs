using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCDemo.models
{
    public interface IStudentRepository
    {
        public List<Student> GetStudents();
        public Student GetStudent(int ID);
    }
}
