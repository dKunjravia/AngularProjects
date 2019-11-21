using Microsoft.EntityFrameworkCore;

namespace quizbackend.Models
{
    public class QuizContext : DbContext
    {
        public DbSet<Question> Questions { get; set; }

        public DbSet<Quiz> Quiz { get; set; }

        public QuizContext(DbContextOptions<QuizContext> options) : base(options){}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb; Database=QuizDb;Trusted_Connection=True");
        }
    }
}
