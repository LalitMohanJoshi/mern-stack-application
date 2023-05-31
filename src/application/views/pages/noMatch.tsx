function NoMatchPage() { // function component , it does't maintain their state , but use props
  return (
      <div className="page-wrapper">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-12">  
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title">NoMatchPage Found</h5> 
                      </div>
                  </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default NoMatchPage;
