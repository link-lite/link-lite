using HutchManager.Dto;

namespace HutchManager.Services;

public class ResultsTranslator
{
  
  public interface IResultsTranslator<T>
  {
    T TranslateRoCrates(ROCratesQueryResult input);
  }
  
  public class RoCratesQueryTranslator : IResultsTranslator<QueryResult>
  {

    public  QueryResult TranslateRoCrates(ROCratesQueryResult job)
    {
      var rquestQueryResult = new QueryResult();
      foreach (var o in job.Graphs)
      {
        var graph = (ROCratesGraph)o;
        switch (graph.Name)
        {
          case "activity_source_id":
            int activitySourceId = Int32.Parse(graph.Value);
            rquestQueryResult.ActivitySourceId = activitySourceId;
            break;
          case "job_id":
            var jobId = graph.Value;
            rquestQueryResult.JobId = jobId;
            break;
          case "count":
            int count = Int32.Parse(graph.Value);
            rquestQueryResult.Results.Count = count;
            break;
        }
      }
      return rquestQueryResult ;
    }
  }

  public class RoCratesToDistribution : IResultsTranslator<DistributionQueryTaskResult>
  {
    public DistributionQueryTaskResult TranslateRoCrates(ROCratesQueryResult job)
    {
      var rquestQueryResult = new DistributionQueryTaskResult();
      foreach (var graph in job.Graphs)
      {
        var g = (ROCratesGraph)graph;
        switch (graph.Name)
        {
          case "activity_source_id":
            int activitySourceId = Int32.Parse(g.Value);
            rquestQueryResult.ActivitySourceId = activitySourceId;
            break;
          case "status":
            rquestQueryResult.Status = g.Value;
            break;
          case "job_id":
            rquestQueryResult.JobId = g.Value;
            break;
          case "files":
            // Todo: convert files from RO-Crates to RQuest
            break;
        }

      }
      return rquestQueryResult ;
    }
  }
}
