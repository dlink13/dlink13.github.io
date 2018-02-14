$(document).ready(function() {
    
$('#countdown_dashboard').countDown({
					targetDate: {
						'day': 		30,
						'month': 	06,
						'year': 	2018,
						'hour': 	23,
						'min': 		59,
						'sec': 		59,	
						'utc':      true,
						},
					omitWeeks: true					
				});               
                             
});