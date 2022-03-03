using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCDemo.models
{
    /// <summary>
    /// student model
    /// </summary>
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Class { get; set; }
        public string Email { get; set; }

        public Student()
        {

        }
        public Student(int id,string name,string CLa,string email)
        {
            ID = id;
            Name = name;
            Class = CLa;
            Email = email;
        }
    }
}
