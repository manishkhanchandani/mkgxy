
      <form action="" method="get" name="frmSearch" id="frmSearch" style="padding-top:20px;">

    <div class="panel panel-warning">
      <div class="panel-heading">Search</div>
      <div class="panel-body">
          <div class="form-group">
              <strong>Keyword:</strong><br />
              <input type="text" name="keyword" class="inputText" value="<?php if (isset($_GET['keyword'])) echo $_GET['keyword']; ?>"/>
          </div>
          
          <div class="form-group">
              <strong>Min Price:</strong><br />
              <input type="text" name="minPrice" class="inputText" value="<?php if (isset($_GET['minPrice'])) echo $_GET['minPrice']; ?>"/>
          </div>
          
          <div class="form-group">
              <strong>Max Price:</strong><br />
              <input type="text" name="maxPrice" class="inputText" value="<?php if (isset($_GET['maxPrice'])) echo $_GET['maxPrice']; ?>"/>
          </div>
      </div>
      </div>
      <div class="form-group">
          <input type="submit" name="submit" id="submit" value="Submit" class="inputText">
      </div>
      </form>