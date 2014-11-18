<!DOCTYPE html>
<html>
    <head>
        <title>Paragraph UI</title>
        <meta name="description" content="Paragraph UI, a minimal and simple user interface to contain everything into paragraphs.">
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1">
        
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <!-- Google fonts -->
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Maven+Pro:400,700">
    </head>
    
    <body>
        <div id="header" class="paragraph big left">
            <h1><span class="blue">&raquo;</span> Paragraph UI.</h1>
            <span class="description">
                A simple, minimal and beautiful user interface to help you serve information in a compact form. No more wasted space in your page!
            </span>
        </div>
        
        <a href="#download" id="gotoDownload">Download it</a>
        <span id="or">or</span>
        
        <div id="promote">
            <h2>Watch it on action</h2>
            
            <div id="nav">
                <a class="nav selected" href="#foursquare">
                    <img class="example" alt="Foursquare" src="img/foursquare.png" />
                    <img class="placeholder" alt="Foursquare" src="img/foursquare-bw.png" />
                </a>
                <a class="nav" href="#twitter">
                    <img class="example" alt="Twitter" id="twitter-nav" src="img/twitter.png" />
                    <img class="placeholder" alt="Twitter" id="twitter-nav" src="img/twitter-bw.png" />
                </a>
                <a class="nav" href="#facebook">
                    <img class="example" alt="Facebook" id="facebook-nav" src="img/facebook.png" />
                    <img class="placeholder" alt="Facebook" id="facebook-nav" src="img/facebook-bw.png" />
                </a>
                <a class="nav" href="#blog">
                    <img class="example" alt="Blog" id="blog-nav" src="img/text.png" />
                    <img class="placeholder" alt="Blog" id="blog-nav" src="img/text-bw.png" />
                </a>
            </div>
        </div>
        
        <div id="examples">
            <div id="wrapper">
            <div id="foursquare" class="paragraph selected">
                <h2 class="title">Foursquare</h2>
                <h3 class="subtitle">Your friend's activity</h3>
                <?php
                    /**
                     * Including sample data as an array to read from...
                     * For the showcase we use a standard format of data to make
                     * it easier.
                     */
                     
                    include 'examples/foursquare.php';
                    
                    foreach( $foursquare_checkins as $checkin ) {
                        ?>
                        <span class="item">
                            <img alt="avatar" class="avatar" src="<?= $checkin["avatar"]; ?>" />
                        
                            <a class="strong" href="#"><?= $checkin["name"]; ?></a>
                            
                            <?php
                                if (isset( $checkin["shout"] ) )
                                    echo " said <span class=\"color\">&quot;" . $checkin["shout"]. "&quot;</span>";
                                else
                                    echo "checked in";
                            ?>
                            
                            at
                            <a class="strong" href="#"><?= $checkin["place"]; ?></a>
                            <span class="light">
                                ,
                                <?= $checkin["type"]; ?>
                                at 
                                <a href="#"><?= $checkin["location"]; ?></a>
                            </span>
                            -
                            <span class="time">
                                <?= $checkin["time"]; ?>
                            </span>
                            <a class="expand" href="#">&raquo;</a>
                        </span>
                        <?php
                    }
                ?>
            </div>
            
            <div id="twitter" class="paragraph">
                <h2 class="title">Twitter</h2>
                <h3 class="subtitle">Your timeline</h3>
                <?php
                    /**
                     * Including sample data as an array to read from...
                     * For the showcase we use a standard format of data to make
                     * it easier.
                     */
                    $username_pattern = '/@([a-zA-Z0-9_]+)/';
                    $hashtag_pattern = '/#(\w*[a-zA-Z_]+\w*)/';
                    
                    $username_link = '<a class="color" href="https://twitter.com/\1">@\1</a>';
                    $hash_link = '<a class="color" href="https://www.twitter.com/search?q=%23\2&src=hash">#\1</a>';
                                 
                    include 'examples/twitter.php';
                    
                    foreach( $tweets as $tweet ) {
                        $tweet_text = $tweet["tweet"];
                    
                        $tweet_text = preg_replace( $username_pattern , $username_link , $tweet_text );
                        $tweet_text = preg_replace( $hashtag_pattern , $hash_link , $tweet_text );
                        
                        ?>
                        <span class="item">
                            <img alt="avatar" class="avatar" src="<?= $tweet["avatar"]; ?>" />
                        
                            <a class="strong" href="#"><?= $tweet["name"]; ?></a>
                            
                            <span>
                                <?= $tweet_text; ?>
                            </span>
                            -
                            <span class="light">
                                <?= $tweet["time"]; ?>
                            </span>
                            <a class="expand" href="#">&raquo;</a>
                        </span>
                        <?php
                    }
                ?>
            </div>
            
            <div id="facebook" class="paragraph">
                <h2 class="title">Facebook</h2>
                <h3 class="subtitle">News feed</h3>
                <?php
                    /**
                     * Including sample data as an array to read from...
                     * For the showcase we use a standard format of data to make
                     * it easier.
                     */
                    include 'examples/facebook.php';
                    
                    foreach( $news as $new ) {
                        ?>
                        <span class="item">
                            <img alt="avatar" class="avatar" src="<?= $new["avatar"]; ?>" />
                        
                            <a class="strong" href="#"><?= $new["name"]; ?></a>
                            
                            <?php
                            if ( isset( $new[ "message" ] ) ) {
                                echo $new[ "message" ];
                            }
                            if ( isset( $new[ "story" ] ) ) {
                                echo ' <span class="light">' . $new[ "story" ] . '</span>';
                            }
                            if ( isset( $new[ "info" ] ) ) {
                                echo ' <span class="light"> - ' . $new[ "info" ] . '</span>';
                            }
                            if ( isset( $new[ "link" ] ) ) {
                                echo ' <a href="#">' . $new[ "link" ] . '</a>';
                            }
                            if ( isset( $new[ "location" ] ) ) {
                                echo ' <span class="light">at</span> <a class="color">' . $new[ "location" ] . '</a>';
                            }
                            ?>
                            -
                            <span class="light">
                                <?= $new["time"]; ?>
                            </span>
                            <a class="expand" href="#">&raquo;</a>
                        </span>
                        <?php
                    }
                ?>
            </div>
            
            <div id="blog" class="paragraph">
                <h2 class="title">Blogging with style</h2>
                <h3 class="subtitle">Everything now is clear</h3>
                <p class="item">
                    Let's explain black holes to you, to see how blogging and 
                    writting can be cleaner and more beautiful with
                    <a href="#">Paragraph UI</a>.
                    <br>
                    <span class="color">What are black holes?</span>
                    Have you ever had to vacuum your bedroom? When you do,
                    watch closely because you will see the dirt and crumbs
                    start to move towards the vacuum cleaner. 
                    A <strong>black hole</strong> is similar to a vacuum cleaner,
                    cleaning up debris left behind in <a href="#">outer space</a>.
                    However, it is not suction power that makes things fall
                    into a black hole.  Suction would not be strong enough. 
                    Instead, a black hole uses the power of gravity to pull
                    things towards it.
                    <br>
                    <br>
                    <span class="color">How do black holes form?</span>
                    When a large star runs out of fuel it can no longer support
                    its heavy weight. The <strong>pressure</strong> from the star's massive
                    layers of hydrogen press down forcing the star to get
                    smaller and smaller and smaller.  Eventually the star will
                    get even <strong>smaller than an atom</strong>. Imagine that for a moment,
                    an entire star squashed up into less space than a tiny atom.
                </p>
            </div>
            </div>
        </div>
        
        <div id="advantagesContainer">
            <h2>Advantages</h2>
            <ul id="advantages" class="paragraph">
                <li>It's simple, clear, beautiful.</li>
                <li>Uses every little space of your screen, without leaving unused areas.</li>
                <li>Ideal for any type of screen, mobile or desktop.</li>
                <li>Focuses on valuable information, leaving out the fuzz.</li>
                <li>Can fit with any kind of information, especially with blogs and social media streams.</li>
                <li>It can be used just by downloading a CSS file and adding some classes.</li>
            </ul>
        </div>
        
        <div id="download">
            <h2>Download</h2>
            <p>You can use paragraph UI on your site for free. Download the styles and get them to action.</p>
            
            <a href="styles/paragraph.css" class="button" id="dlcss">
                <b>Download</b>
                .css file (compressed)
            </a>
            <a href="styles/paragraph.less" class="button" id="dlless">
                <b>Download</b>
                .less file (compressed)
            </a>
        </div>
        
        <div id="footer" class="paragraph small center dark">
            <h3>Designed and developed by <a href="http://www.rigaspapas.com">Rigas Papas</a></h3>
            <span class="line light">Paragraph UI is MIT licensed</span>
            <strong>Special thanks to</strong>
            Google fonts <span class="light">for providing the</span> Maven Pro <span class="light">font</span>.
            jQuery <span class="light">for the awesome tools it provides to developers</span>.

        </div>
        
        <!-- Scripts -->
        <script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
        <script type="text/javascript" src="js/styleagent.js"></script>
        <script type="text/javascript" src="js/showcase.js"></script>
    </body>
</html>