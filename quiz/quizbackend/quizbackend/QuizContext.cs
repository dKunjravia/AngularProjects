﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using quizbackend.Models;

namespace quizbackend
{
    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options) : base(options){}

        public DbSet<Models.Question> Questions { get; set; }

        public DbSet<quizbackend.Models.Quiz> Quiz { get; set; }
    }
}
