<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>FRIEND'S ISP</title>
    <link rel="shortcut icon" href="{{url('/')}}/assets/images/logo/favicon.png">
    <link href="{{url('/')}}/assets/css/app.min.css" rel="stylesheet">
    <link href="{{url('/')}}/assets/css/custom.css" rel="stylesheet">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{url('/')}}/assets/vendors/select2/select2.css" rel="stylesheet">

    <!-- page js -->
    <script src="{{url('/')}}/assets/vendors/select2/select2.min.js"></script>

    <!-- Scripts -->
</head>

<body>
    <div class="app">        
        <div className="layout" id="app">
        </div>
    </div>
    <!-- Core Vendors JS -->
    <script src="{{url('/')}}/assets/js/vendors.min.js"></script>
    <!-- page js -->
    <script src="{{url('/')}}/assets/vendors/chartjs/Chart.min.js"></script>
    <script src="{{url('/')}}/assets/js/pages/dashboard-default.js"></script>
    <!-- Core JS -->
</body>

</html>