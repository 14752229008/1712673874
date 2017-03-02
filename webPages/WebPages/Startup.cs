using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebPages.Startup))]
namespace WebPages
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
