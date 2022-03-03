using Microsoft.AspNetCore.Mvc;
using MVCDemo.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MVCDemo.controller
{
    public class HomeController : Controller
    {
        private readonly IStudentRepository studentRepository;
        public HomeController(IStudentRepository _studentRepository)
        {
            studentRepository = _studentRepository;
        }
        public IActionResult Index()
        {
            ViewBag.PageTitle = "student manage system";
            ViewBag.Student = studentRepository.GetStudents();
            return View();
        }
        public IActionResult Details()
        {
            Student model= studentRepository.GetStudent(2);
            ViewData["PageTitle"] = "students 2 list as:";
            ViewData["Student"] = model;
            return View();
        }
    }
}
