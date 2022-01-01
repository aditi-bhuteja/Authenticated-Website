using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoginApplication.Models;
using LoginApplication.VM;

namespace LoginApplication.Controllers
{
    [RoutePrefix("Api/Fo")]

    public class FoController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select Id,PIEname,ReqNumber,SMEname,IssueCategory,ProductID,Location,Manufacturer,Status,
                    convert(varchar(50),Date_Time,120) as Date_Time
                    from
                    dbo.roleDatabase
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["roleEntities"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);

        }

        public string Post(Sme Fo)
        {
            try
            {
                string query = @"
                    insert into dbo.roleDatabase values
                    (
                    '" + Fo.PIEname + @"'
                    ,'" + Fo.SMEname + @"'
                    ,'" + Fo.ReqNumber + @"'
                    ,'" + Fo.IssueCategory + @"'
                    ,'" + Fo.ProductID + @"'
                    ,'" + Fo.Location + @"'
                    ,'" + Fo.Manufacturer + @"'
                    ,'" + Fo.Status + @"'
                    ,'" + Fo.Date_Time + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["roleEntities"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "New Request Generated Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Add!!";
            }
        }

        public string Put(Sme Fo)
        {
            try
            {
                string query = @"
                    update dbo.roleDatabase set 
                    PIEname='" + Fo.PIEname + @"'
                    ,SMEname='" + Fo.SMEname + @"'  
                    ,IssueCategory='" + Fo.IssueCategory + @"'
                    ,Status='" + Fo.Status + @"'
                    ,Date_Time='" + Fo.Date_Time + @"'
                    where Id=" + Fo.Id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["roleEntities"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Request assigned!!";
            }
            catch (Exception)
            {

                return "Failed to Assign!!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.roleDatabase 
                    where Id=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["roleEntities"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Delete!!";
            }
        }



    }
}
