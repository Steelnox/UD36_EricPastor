using FrontUD36.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace FrontUD36.Controllers
{
    public class EjemploController : Controller
    {
        public IActionResult EjemploView()
        {
            return View();
        }
    }
}
